import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'
import {
  Container,
  BgImage,
  Name,
  Role,
  PlaylistContainer,
  PlaylistHeader,
  Heading,
  SearchContainer,
  Input,
  Songs,
  NoSongs,
} from './styledComponents'
import Song from '../Song'

class MusicPlaylist extends Component {
  constructor(props) {
    super(props)
    const {initialTracksList} = this.props
    this.state = {tracksList: initialTracksList, searchInput: ''}
  }

  removeSongItem = deleteId => {
    this.setState(prevState => ({
      tracksList: prevState.tracksList.filter(
        eachTrack => eachTrack.id !== deleteId,
      ),
    }))
  }

  getSearchResults = () => {
    const {searchInput, tracksList} = this.state

    return tracksList.filter(eachTrack =>
      eachTrack.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  onChangeSearchInput = event =>
    this.setState({searchInput: event.target.value})

  render() {
    const {searchInput} = this.state
    const filteredTracksList = this.getSearchResults()
    const isSongsFound = filteredTracksList.length !== 0

    return (
      <Container>
        <BgImage>
          <Name>Ed Sheeran</Name>
          <Role>Singer</Role>
        </BgImage>
        <PlaylistContainer>
          <PlaylistHeader>
            <Heading>Songs Playlist</Heading>
            <SearchContainer>
              <Input
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
              <BiSearch />
            </SearchContainer>
          </PlaylistHeader>
          {isSongsFound && (
            <Songs>
              {filteredTracksList.map(eachTrack => (
                <Song
                  key={eachTrack.id}
                  songItemDetails={eachTrack}
                  removeSongItem={this.removeSongItem}
                />
              ))}
            </Songs>
          )}
          {!isSongsFound && <NoSongs>No Songs Found</NoSongs>}
        </PlaylistContainer>
      </Container>
    )
  }
}

export default MusicPlaylist
