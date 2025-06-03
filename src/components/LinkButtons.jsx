const LinkButton = ({ children, ...props }) => (
  <a
    className="inline-flex  text-gray-800  items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white bg-body border md:border-white/20 border-blue-500/30 text-md hover:border-blue-500/30 group max-w-fit rounded hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 "
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);

export default LinkButton;
