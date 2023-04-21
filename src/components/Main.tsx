import { ReactNode } from "react"
import styled from "styled-components"
import { Container } from "./Container"

interface MainProps {
	children: ReactNode
}

const Wrapper = styled.main`
	padding: 2rem 0;

	@media (min-width: 767px) {
		padding: 4rem 0;
	}
`

export const Main = ({ children }: MainProps) => {
	return (
		<Wrapper>
			<Container>{children}</Container>
		</Wrapper>
	)
}
