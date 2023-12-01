export default function PriceInput({
  label,
  name,
  register,
  errors,
  placeholder,
  isRequired = true,
  type = "number",
  className = "sm:col-span-2",
  defaultValue = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        {label}
      </label>
      <div className='mt-2'>
        <input
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5'
          placeholder={`For example ${placeholder.toLowerCase()}`}
          required=''
        />
        {errors[`${name}`] && (
          <span className='text-sm text-red-600 '>{label} is required</span>
        )}
      </div>
    </div>
  );
}
