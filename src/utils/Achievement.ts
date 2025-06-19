import { RewardMetadata } from './reward.js';
import { AchievementId } from '../payloads/index.js';

export interface AchievementReward {
  id: AchievementId;
  reward: RewardMetadata;
}
