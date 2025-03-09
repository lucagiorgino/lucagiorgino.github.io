import { useColorMode } from '@docusaurus/theme-common';

const socialDetails = [
    {
        label: 'LinkedIn',
        classname: 'bi bi-linkedin',
        href: 'https://www.linkedin.com/in/luca-giorgino/',
    },
    {
        label: 'GitHub',
        classname: 'bi bi-github',
        href: 'https://github.com/lucagiorgino',
    },
    {
        label: 'X/Twitter',
        classname: 'bi bi-twitter-x',
        href: 'https://twitter.com/LucaGiorginoo',
    },
];

export default function Socials(): JSX.Element {
    const { colorMode } = useColorMode();
    return (
        <div className="socials">
            {socialDetails.map( social => (
                <a style={{
                    fontSize: "32px",
                    marginRight: 20,
                    color: colorMode === 'dark' ? 'black' : 'white',
                  }}
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="nofollow noreferrer">
                    <i className={social.classname}></i>
                </a>
            ))}
        </div>
    );
}
