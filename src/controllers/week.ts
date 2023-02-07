// week
import api from '../service/api';

interface ActivityDTO {
  id: string;
  title: string;
  description: string;
  status: string;
  deadline: Date;
  createdAt: Date;
  updateAt: Date;
}

interface WeeklyDTO {
  category: string;
  title: string;
  description: string;
  status: string;
  activities: ActivityDTO[];
  deadline: Date;
  createdAt: Date;
  updateAt: Date;
}

export const newWeek = (week: WeeklyDTO) => {
  return api.post('/week/new_week', {week});
}

export const updateWeek = (week: WeeklyDTO, idWeek: number) => {
  return api.post(`/month/update_month/${idWeek}`, {week})
}

export const weeks = () => {
  return api.get('/month/all_weeks')
}