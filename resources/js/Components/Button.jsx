import { Link } from "@inertiajs/react";
const Button = ({ route, children  }) => {
    return (
        <Link
            as="button"
            href={route}
            class="hvr-icon-forward hvr-sweep-to-right hvr-grow p-5 border rounded-lg hover:border-[#F5CC00] "
        >
            {children}
        </Link>
    );
};

export default Button;
