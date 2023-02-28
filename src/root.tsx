// @refresh reload
import {Suspense} from "solid-js";
import {
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html, Link,
    Meta,
    Routes,
    Scripts,
    Title,
} from "solid-start";
import "./root.css";
import {useGlobalTranslation} from "~/components/LanguagesContext";

export default function Root() {
    let lang = () => useGlobalTranslation().lang;
    let desc = () => useGlobalTranslation().t.headDescription;
    
    return (
        <Html lang={lang()}>
            <Head>
                <Title>Cauã Rinaldi</Title>
                <Meta charset="utf-8"/>
                <Meta name="viewport" content="width=device-width, initial-scale=1"/>
                <Meta name={"description"}
                      content={desc()}></Meta>
                <Meta name="google-site-verification" content="s3Y9AReH1zovvf6BuC-6NyLLRkW1BJmRHzZ0L5-z5Lk" />
                <Link rel={"preconnect"} href={"https://fonts.gstatic.com"}></Link>
                <Link rel={"preconnect"} href={"https://fonts.googleapis.com"}></Link>
                <Link rel="shortcut icon" href={import.meta.env.BASE_URL + "favicon.ico"} type="image/x-icon"></Link>
                <Link rel="icon" href={import.meta.env.BASE_URL + "favicon.ico"} type="image/x-icon"></Link>
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>
                        <Routes>
                            <FileRoutes/>
                        </Routes>
                    </ErrorBoundary>
                </Suspense>
                <Scripts/>
            </Body>
        </Html>
    );
}
