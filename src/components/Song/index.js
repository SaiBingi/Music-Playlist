import {AiOutlineDelete} from 'react-icons/ai'
import {
  SongItem,
  SongImage,
  SongDetailsContainer,
  SongDetails,
  SongDetails2,
  SongName,
  Genre,
  Duration,
  DeleteIcon,
} from './styledComponents'

const Song = props => {
  const {songItemDetails, removeSongItem} = props
  const {id, imageUrl, name, genre, duration} = songItemDetails

  const onClickDelete = () => {
    removeSongItem(id)
  }

  return (
    <SongItem>
      <SongImage src={imageUrl} alt="track" />
      <SongDetailsContainer>
        <SongDetails>
          <SongName>{name}</SongName>
          <Genre>{genre}</Genre>
        </SongDetails>
        <SongDetails2>
          <Duration>{duration}</Duration>
          <DeleteIcon type="button" onClick={onClickDelete} testid="delete">
            <AiOutlineDelete size={20} testid="delete" />
          </DeleteIcon>
        </SongDetails2>
      </SongDetailsContainer>
    </SongItem>
  )
}

export default Song
