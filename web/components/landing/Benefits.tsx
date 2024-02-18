import BenefitCard from './BenefitCard'

export type Benefit = {
	icon: JSX.Element
	title: string
	description: string
}

export default function Benefits(): JSX.Element {
	return (
		<section className='w-full my-[100px]'>
			<header className='text-center font-bold'>
				<p className='text-gray-500'>Beneficios</p>
				<h1 className='text-5xl text-primary'>
					Nuestros principales beneficios
				</h1>
			</header>
			<div className='flex gap-4 justify-center flex-wrap mt-10'>
				{benefits.map(benefit => (
					<BenefitCard key={benefit.title} {...benefit} />
				))}
			</div>
		</section>
	)
}

const benefits: Benefit[] = [
	{
		icon: <></>,
		title: 'Seguridad y Eficiencia Mejoradas',
		description:
			'La tecnología blockchain garantiza transacciones seguras y transparentes, reduciendo el riesgo de fraude y duplicación, mientras disminuye los costos operativos en servicio al cliente para las aerolíneas.'
	},
	{
		icon: <></>,
		title: 'Transferencia y Reventa Sin Esfuerzo',
		description:
			'Revende o transfiere tiquetes fácilmente, manteniendo su autenticidad. Un mercado secundario vibrante controla la especulación y asegura precios justos, beneficiando tanto a usuarios como a aerolíneas.'
	},
	{
		icon: <></>,
		title: 'Experiencias de Viaje Enriquecidas',
		description:
			'Ofertas personalizadas, desde asientos preferenciales hasta acceso exclusivo a salas VIP, y coleccionables conmemorativos que convierten cada viaje en una experiencia única y memorable.'
	},
	{
		icon: <></>,
		title: 'Optimización de la Ocupación y los Ingresos',
		description:
			'La capacidad de ajustar la oferta de asientos en tiempo real permite a las aerolíneas maximizar la ocupación y los ingresos, enfrentando el desafío de los vuelos no completos.'
	},
	{
		icon: <></>,
		title: 'Transparencia y Justicia en la Preciación',
		description:
			'Acceso a historiales de transacciones y precios para tomar decisiones de compra informadas, fomentando la confianza en la plataforma y asegurando precios justos.'
	},
	{
		icon: <></>,
		title: 'Innovación en el Mercado Secundario',
		description:
			'NFTrip facilita un mercado secundario dinámico que no solo ofrece flexibilidad a los usuarios, sino que también genera ingresos adicionales y oportunidades de lealtad para las aerolíneas.'
	}
]
