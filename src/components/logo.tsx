type LogoProps = React.SVGProps<SVGSVGElement>;

const Logo: React.FC<LogoProps> = () => {
    return (
        <>
            <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 250 185"
                style={{
                    width: "50px",
                    height: "37px",
                }}
            >
                <image
                    width="250"
                    height="185"
                    xlinkHref="https://png.pngtree.com/png-clipart/20230425/original/pngtree-girl-logo-cartoon-avatar-doodle-kawaii-anime-cute-illustration-drawing-clip-png-image_9099361.png"
                />
            </svg>
        </>
    );
};
export default Logo;
