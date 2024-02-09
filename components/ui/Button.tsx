import { cn } from "@/lib/utils";
function Button({ children, className, ...props }: any) {
  return (
    <button
      type="button"
      className={cn(
        "text-white primary-button hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none ",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
