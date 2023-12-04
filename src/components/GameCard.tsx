import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import PlatformIconList from './PlatformIconList'
import Emoji from './Emoji'

interface Props {
	game: Game
}

const GameCard = ({ game }: Props) => {
	return (
		<Card _hover={{ transform: 'scale(0.95)', filter: 'brightness(110%)' }} transition="transform 0.3s, filter 0.3s">
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent="space-between" mb={3}>
					<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="2xl">
					{game.name}
					<Emoji rating={game.rating_top}></Emoji>
				</Heading>
			</CardBody>
		</Card>
	)
}

export default GameCard
