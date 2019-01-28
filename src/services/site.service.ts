import { Site, SiteModel, SiteAddModel } from '../models/site';

export class SiteService {
  static get userAttributes() {
    return [
      'id',
      'name',
      'url',
      'acronym',
      'site_order',
      'description',
      'tags',
      'niche',
      'bg_image',
      'header_images',
      'site_logo',
      'site_thumbnail',
      'trailer_link',
      'site_color',
      'site_color_hover',
      'trailer_trap_link',
      'picture_trap_link',
      'main_join_link',
      'slug',
      'hidden_in_tours',
      'has_bestof_video',
      'sitefolder',
      'sitecolor',
      'sitecolorhover',
      'natssiteid',
      'mobile_ma_site_order',
      'mobile_clicks',
      'live'];
  }
  // private static _user: string;
  // static get user(): string {
  //   return UserService._user;
  //
  // }

  static getSites() {
    return Site.findAll({attributes: SiteService.userAttributes});
  }
  static getSiteById(id: number) {
    return Site.findAll({
      where: { id: id}
    });
  }
}
