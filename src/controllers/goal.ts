//goal
import api from '../service/api';

interface GoalDTO {
  title: string;
  description: string;
  status: string;
  deadline: Date;
  createdAt: Date;
  updateAt: Date;
}

export const newGoal = (goal: GoalDTO) => {
  return api.post('/goal/new_goal', {goal});
}

export const updateGoal = (goal: GoalDTO, idGoal: number) => {
  return api.post(`/goal/update_goal/${idGoal}`, {goal})
}

export const goals = () => {
  return api.get('/goal/all_goals')
}