// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

export type CustomerType = {
  id: string
  firstName: string
  lastName: string
  companyName: string
  slStreetNo: string
  slStreetName: string
  slApartment: string
  slCity: string
  slState: string
  slPostalCode: string
  maStreetNo: string
  maStreetName: string
  maApartment: string
  maCity: string
  maState: string
  maPostalCode: string
  poBoxNo: string
  poBoxCity: string
  poBoxState: string
  poBoxPostalCode: string
  phoneNo: string
  email: string
  websiteUrl: string
  isActive: string
  createdAt: string
  createdBy: string
  updatedAt: string
  updatedBy: string
  currentPlan: string
  avatarColor?: ThemeColor
}

export type ProjectListDataType = {
  id: number
  img: string
  hours: string
  totalTask: string
  projectType: string
  projectTitle: string
  progressValue: number
  progressColor: ThemeColor
}
