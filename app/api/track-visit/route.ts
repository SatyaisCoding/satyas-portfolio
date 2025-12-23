import { NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const COUNTS_FILE = path.join(process.cwd(), 'data', 'visitor-counts.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!existsSync(dataDir)) {
    const { mkdir } = await import('fs/promises');
    await mkdir(dataDir, { recursive: true });
  }
}

// Initialize counts file if it doesn't exist
async function initializeCounts() {
  await ensureDataDir();
  if (!existsSync(COUNTS_FILE)) {
    const initialData = {
      hiring: 0,
      visiting: 0,
      lastUpdated: new Date().toISOString(),
    };
    await writeFile(COUNTS_FILE, JSON.stringify(initialData, null, 2));
    return initialData;
  }
  return null;
}

// Read counts from file
async function readCounts() {
  await ensureDataDir();
  
  // Initialize if file doesn't exist
  if (!existsSync(COUNTS_FILE)) {
    await initializeCounts();
  }
  
  try {
    const data = await readFile(COUNTS_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    // Ensure all required fields exist
    return {
      hiring: parsed.hiring || 0,
      visiting: parsed.visiting || 0,
      lastUpdated: parsed.lastUpdated || new Date().toISOString(),
    };
  } catch (error) {
    // If file is corrupted, reinitialize it
    console.error('Error reading counts file, reinitializing:', error);
    const initialData = {
      hiring: 0,
      visiting: 0,
      lastUpdated: new Date().toISOString(),
    };
    await writeFile(COUNTS_FILE, JSON.stringify(initialData, null, 2));
    return initialData;
  }
}

// Write counts to file
async function writeCounts(counts: { hiring: number; visiting: number; lastUpdated: string }) {
  await ensureDataDir();
  await writeFile(COUNTS_FILE, JSON.stringify(counts, null, 2));
}

// Track a visit
export async function POST(request: Request) {
  try {
    const { type } = await request.json();

    if (type !== 'hiring' && type !== 'visiting') {
      return NextResponse.json(
        { error: 'Invalid type. Must be "hiring" or "visiting"' },
        { status: 400 }
      );
    }

    const counts = await readCounts();
    
    if (type === 'hiring') {
      counts.hiring += 1;
    } else {
      counts.visiting += 1;
    }
    
    counts.lastUpdated = new Date().toISOString();
    
    await writeCounts(counts);

    return NextResponse.json({ 
      success: true, 
      counts: {
        hiring: counts.hiring,
        visiting: counts.visiting,
      }
    });
  } catch (error) {
    console.error('Error tracking visit:', error);
    return NextResponse.json(
      { error: 'Failed to track visit' },
      { status: 500 }
    );
  }
}

// Get counts (for admin/internal use)
export async function GET() {
  try {
    const counts = await readCounts();
    return NextResponse.json({
      hiring: counts.hiring,
      visiting: counts.visiting,
      total: counts.hiring + counts.visiting,
      lastUpdated: counts.lastUpdated,
    });
  } catch (error) {
    console.error('Error reading counts:', error);
    return NextResponse.json(
      { error: 'Failed to read counts' },
      { status: 500 }
    );
  }
}

