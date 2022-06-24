export default function Footer(props: {class: string}){
    return(
        <footer className={props.class}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
            </a>
        </footer>
    );
}