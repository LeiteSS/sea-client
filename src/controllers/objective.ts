//objective
import api from '../service/api';

interface ObjectiveDTO {
  status: string;
  title: string;
  description: string;
  deadline: Date;
  createdAt: Date;
  updateAt: Date;
}

export const newObjective = (objective: ObjectiveDTO, idGoal: number) => {
  return api.post(`/objective/new_objective/${idGoal}`, {objective});
}

export const updateObjective = (objective: ObjectiveDTO, idObjective: number) => {
  return api.post(`/objective/update_objective/${idObjective}`, {objective});
}

export const objectives = () => {
  return api.get('/objective/all_objectives');
}