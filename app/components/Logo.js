const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src="/logo.png" alt="The Wild Oasis" height="60" width="60" />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
