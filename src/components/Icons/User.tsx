import * as React from "react"

function UserSVG( props: React.SVGAttributes<unknown> ) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C10.8119 19.2 9.64218 18.906 8.59528 18.3441C7.54837 17.7823 6.65678 16.9701 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C17.3432 16.9701 16.4516 17.7823 15.4047 18.3441C14.3578 18.906 13.1881 19.2 12 19.2Z" fill="white" fill-opacity="0.8" />
        </svg>
    )
}

export default UserSVG