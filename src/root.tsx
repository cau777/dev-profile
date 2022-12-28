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

export default function Root() {
    return (
        <Html lang={"en"}>
            <Head>
                <Title>Cauã Rinaldi</Title>
                <Meta charset="utf-8"/>
                <Meta name="viewport" content="width=device-width, initial-scale=1"/>
                <Meta name={"description"}
                      content={"A personal portfolio website for Cauã Rinaldi, highlighting education, courses, programming languages, and projects."}></Meta>
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
