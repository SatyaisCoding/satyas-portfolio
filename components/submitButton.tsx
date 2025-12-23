import { Send, Loader2 } from "lucide-react";
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] min-w-[8rem] px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:from-purple-700 hover:to-pink-700 active:scale-105 disabled:scale-100 disabled:opacity-65 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 disabled:shadow-none"
      disabled={pending}
      aria-label="Submit contact form"
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin" size={16} />
          <span>Sending...</span>
        </>
      ) : (
        <>
          Submit {" "}
          <Send
            size={16}
            className="opacity-90 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </>
      )}
    </button>
  );
}

export default SubmitButton;