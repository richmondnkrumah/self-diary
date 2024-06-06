import { NOTE_COLORS } from "@/constants/Colors";



const getRandomNoteColor = (): { main_color: string, highlight_color: string } => {
  const randomNum = Math.ceil(Math.random() * NOTE_COLORS.length)

  return NOTE_COLORS[randomNum]
}