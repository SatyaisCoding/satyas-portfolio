'use client'

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/hooks";
import {motion} from 'framer-motion';


const fadeInAnimationsVariants = {
    initial : {
        opacity : 0,
        y: 100,
    },
    animate :(index : number) => ({
        opacity : 1,
        y : 0,
        transition : {
            delay : 0.05 * index,
            type: "spring",
            stiffness: 100,
        }
    }),
}

function Skills() {
    const {ref} = useSectionInView('Skills')

    const getProficiencyLabel = (level: number) => {
        if (level >= 90) return 'Expert';
        if (level >= 75) return 'Advanced';
        if (level >= 60) return 'Intermediate';
        return 'Beginner';
    };

  return (
    <section ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 px-4 mx-auto relative z-[1]" id='skills'>
      <SectionHeading>
        My Skills
      </SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800 mx-auto">
        {skillsData.map((skill, index) =>(
            <motion.li 
                className="relative group cursor-pointer"
                key={index} 
                variants={fadeInAnimationsVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                    once : true
                }}
                custom={index}
                style={{ perspective: '1000px' }}
            >
                {/* Flip Card Container */}
                <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side - Simple Skill Display */}
                    <div className="[backface-visibility:hidden] bg-white/80 backdrop-blur-sm borderBlack rounded-xl py-3 px-5 dark:bg-white/10 dark:text-white/80 shadow-md hover:shadow-lg flex items-center justify-center min-w-[120px] max-w-[180px]">
                        <span className="mr-2 text-xl transition-transform inline-block flex-shrink-0">
                            {skill.icon}
                        </span>
                        <span className="font-medium text-gray-800 dark:text-gray-200 truncate">
                            {skill.name}
                        </span>
                    </div>
                    
                    {/* Back Side - Proficiency Details */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-4 shadow-lg flex flex-col items-center justify-center text-white min-w-[120px] max-w-[180px]">
                        <div className="text-sm font-semibold mb-3 text-center truncate w-full">{skill.name}</div>
                        <div className="text-xs text-purple-100 mb-4 uppercase tracking-wider">
                            {getProficiencyLabel(skill.level)}
                        </div>
                        {/* Loading-like Progress Structure */}
                        <div className="w-full space-y-2">
                            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden shadow-inner">
                                <motion.div
                                    className="h-full bg-white rounded-full relative"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                >
                                    {/* Shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        animate={{
                                            x: ['-100%', '100%'],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />
                                </motion.div>
                            </div>
                            {/* Loading dots indicator */}
                            <div className="flex justify-center gap-1">
                                {[0, 1, 2].map((dot) => (
                                    <motion.div
                                        key={dot}
                                        className="w-1.5 h-1.5 bg-white/60 rounded-full"
                                        animate={{
                                            opacity: [0.3, 1, 0.3],
                                            scale: [0.8, 1, 0.8],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: dot * 0.2,
                                            ease: "easeInOut"
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Skills