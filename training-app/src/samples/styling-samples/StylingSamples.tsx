import styled from "styled-components";
import { CssModulesSample } from "./css-modules/CssModulesSample";
import { PlainCssSample } from "./plain-css/PlainCssSample";
import { StyledComponentsSample } from "./styled-components/StyledComponentsSample";
import { TailwindSample } from "./tailwind/TailwindSample";

const ContentRoot = styled.div`
    padding: 8px;
`

export const StylingSamples = () => (
    <ContentRoot>
        <PlainCssSample />
        <StyledComponentsSample />
        <TailwindSample />
        <CssModulesSample />
    </ContentRoot>
)