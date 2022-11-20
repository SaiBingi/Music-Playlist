import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Roboto';
`

export const BgImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 90px;
`

export const Name = styled.h1`
  color: #ffffff;
  font-weight: 500;
  font-size: 47px;
  margin: 0;
`

export const Role = styled.p`
  color: #ffffff;
  font-size: 28px;
  margin-top: 10px;
  font-weight: 400;
`

export const PlaylistContainer = styled.div`
  background-color: #152850;
  min-height: 60vh;
  padding: 25px 50px 25px 50px;
`

export const PlaylistHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 43px;
`

export const Heading = styled.h1`
  color: #ffffff;
  margin: 0;
  font-weight: 500;
  font-size: 30px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ffffff;
  padding: 5px 10px 5px 10px;
  border-radius: 4px;
  width: 260px;
  color: #ffffff;
`

export const Input = styled.input`
  outline: none;
  background-color: transparent;
  border: none;
  font-size: 15px;
  color: #ffffff;
  font-family: 'Roboto';
  width: 100%;
`

export const Songs = styled.ul`
  padding: 0;
  list-style-type: none;
`

export const NoSongs = styled.p`
  color: #ffffff;
  font-size: 38px;
  font-weight: 500;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 35vh;
`
