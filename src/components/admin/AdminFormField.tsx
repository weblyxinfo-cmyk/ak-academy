interface AdminFormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string | number;
  placeholder?: string;
  rows?: number;
  children?: React.ReactNode;
}

export function AdminFormField({
  label,
  name,
  type = "text",
  required = false,
  defaultValue,
  placeholder,
  rows,
  children,
}: AdminFormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {children ? (
        children
      ) : type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          defaultValue={defaultValue}
          placeholder={placeholder}
          rows={rows || 4}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      )}
    </div>
  );
}
