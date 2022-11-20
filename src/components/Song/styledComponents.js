import styled from 'styled-components'

export const SongItem = styled.li`
  display: flex;
  margin-bottom: 19px;
`

export const SongImage = styled.img`
  width: 185px;
  height: 120px;
`

export const SongDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`

export const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const SongName = styled.p`
  color: #ffffff;
  margin: 0;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 24px;
`

export const Genre = styled.p`
  color: #3b82f6;
  margin: 0;
  font-size: 24px;
`

export const SongDetails2 = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
`

export const Duration = styled.p`
  font-size: 23px;
  margin-right: 40px;
`

export const DeleteIcon = styled.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  color: #ffffff;
  border: none;
`
