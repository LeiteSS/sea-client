//month
import api from '../service/api';

interface ObjectiveDTO {
  id: string;
  status: string;
  title: string;
  description: string;
  deadline: Date;
  createdAt: Date;
  updateAt: Date;
}

interface MonthDTO {
  theme: string;
  epic: string;
  userStory: string;
  objectives: ObjectiveDTO[]; 
  status: string;
  deadline: Date;
  createdAt: Date;
  updateAt: Date;
}

export const newMonth = (month: MonthDTO) => {
  return api.post('/month/new_month', {month});
}

export const updateMonth = (month: MonthDTO, idMonth: number) => {
  return api.post(`/month/update_month/${idMonth}`, {month})
}

export const months = () => {
  return api.get('/month/all_month')
}