import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
    return (
        <>
            <div className="flex justify-center bg-sky-950 text-red-50">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        Essepê 0800 | Desenvolvido por Luiza Kormann
                    </p>
                    <p className="text-lg">Entre em contato:</p>
                    <div className="flex gap-2">
                        <LinkedinLogo size={48} weight="bold" />
                        <GithubLogo size={48} weight="bold" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
