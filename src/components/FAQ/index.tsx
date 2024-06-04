import { Reveal } from '../Animations/Reveal'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../Accordion'

type FAQProps = {
	questions: {
		question: string
		answer: string
	}[]
}

export default function FAQ({ questions }: FAQProps) {
	return (
		<div>
			<Accordion className="paragraph" type="single" collapsible>
				{questions.map((question, index) => (
					<AccordionItem
						key={index}
						value={`item-${index}`}
						className={index === 0 ? 'border-none' : 'border-t'}
					>
						<AccordionTrigger>{question.question}</AccordionTrigger>
						<AccordionContent>{question.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	)
}
