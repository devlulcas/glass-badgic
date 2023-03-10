type FormFieldProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function FormField({ label, ...rest }: FormFieldProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-sm font-semibold text-green-500" htmlFor={rest.id}>
        {label}
      </label>

      <input
        className="w-full px-2 py-1 border-[1px] border-[hsl(0 0 100% / 50%)] rounded-md bg-white bg-opacity-50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        {...rest}
      />
    </div>
  );
}
