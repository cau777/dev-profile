// @refresh reload
import {Suspense} from "solid-js";
import {
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title,
} from "solid-start";
import "./root.css";
import {LanguageLoader} from "~/components/LanguageLoader";
import {globalLang} from "~/i18n/i18n-config";

export default function Root() {
    const lang = () => globalLang() ?? "en";
    return (
        <Html lang={lang()}>
            <Head>
                <Title>Cauã Rinaldi</Title>
                <Meta charset="utf-8"/>
                <Meta name="viewport" content="width=device-width, initial-scale=1"/>
                <Meta name={"description"} content={"A personal portfolio website for Cauã Rinaldi, highlighting education, courses, programming languages, and projects."}></Meta>
            </Head>
            <Body>
                <Suspense>
                    <LanguageLoader>
                        <ErrorBoundary>
                            <Routes>
                                <FileRoutes/>
                            </Routes>
                        </ErrorBoundary>
                    </LanguageLoader>
                </Suspense>
                <Scripts/>
            </Body>
        </Html>
    );
}
