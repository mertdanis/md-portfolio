function Title({ children, className }) {
  return (
    <h2 className={`h2 text-4xl p-3 text-center ${className}`}>{children}</h2>
  );
}

export default Title;
