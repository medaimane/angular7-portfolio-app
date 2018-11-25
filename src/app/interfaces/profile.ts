import { SocialLink } from './social-link';
import { PersonalInfos } from './personal-infos';

export interface Profile {
    title: string;
    subtitle: string;
    description: string;
    personalInfos: PersonalInfos;
    links: SocialLink[];
}
