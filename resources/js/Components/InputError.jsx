export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-sm text-jonquil ' + className}>
            {message}
        </p>
    ) : null;
}
