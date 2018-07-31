# Builder Blvd

Builder Blvd is a WordPress plugin in the works, meant to replace [Theme Blvd Layout Builder](https://wordpress.org/plugins/theme-blvd-layout-builder/) and [Theme Blvd Shortcodes](https://wordpress.org/plugins/theme-blvd-shortcodes) to bring [Jump Start](https://wpjumpstart.com) into the new [Gutenberg](https://wordpress.org/plugins/gutenberg/) era. It combines blocks of [Front Street](https://github.com/themeblvd/frontstreet) with elements originally created in the [Theme Blvd](https://themeblvd.com) WordPress theme framework.

While the Theme Blvd's [Layout Builder](https://wordpress.org/plugins/theme-blvd-layout-builder) and [Shortcode](https://wordpress.org/plugins/theme-blvd-shortcodes) plugins have always required a commercial Theme Blvd WordPress theme to work, Builder Blvd is meant to work on its own, with any theme.

## Requirements

* WordPress 5+ (or [Gutenberg](https://wordpress.org/plugins/gutenberg/) + WordPress 4.9)
* PHP 5.3+.

## Project Planning

### Blocks

The following is a working list of Builder Blvd's blocks. Currently, all except the "Section" block are being converted from elements of the [Theme Blvd Layout Builder](https://wordpress.org/plugins/theme-blvd-layout-builder/).

| Name | ID | Formerly | In Front Street? |
| ---- | -- | -------- | ---------------- |
| Alert | alert | alert | Yes |
| Author Box | author_box | author_box | No |
| Blog | blog | blog | No |
| Box | box | panel | Yes (widget) |
| Call-to-Action | cta | slogan | No |
| Icon Box | icon_box | icon_box | No |
| Milestone | milestone | milestone | No |
| Mini Post Grid | mini_post_grid | mini_post_grid | No |
| Mini Post List | mini_post_list | mini_post_list | No |
| Partner Logos | partners | partners | No |
| Post Content | post | external | No |
| Post Grid | post_grid | post_grid | No |
| Post List | post_list | post_list | No |
| Post Showcase | post_showcase | post_showcase | No |
| Post Slider | post_slider | post_slider | @TODO |
| Pricing Table | pricing_table | pricing_table | No |
| Progress Bars | progress_bars | progress_bars | Yes |
| Section | section | *N/A* | No |
| Slider | slider | simple_slider | Yes |
| Tabs | tabs | tabs | Yes |
| Team Member | team_member | team_member | No |
| Testimonial | testimonial | testimonial | Yes |
| Testimonial Slider | testimonial_slider | testimonial_slider | No |
| Toggles | toggles | toggles | Yes |
| Widget Area | widgets | widget | No |

*Note: Still undecided if we'll need to create a Columns block or the default one of the WordPress editor can be extended.*

### Removed Elements

The following are elements of the [Theme Blvd Layout Builder](https://wordpress.org/plugins/theme-blvd-layout-builder/) will not be included with Builder Blvd, and will need to be converted somehow.

| Name | ID | Conversion Notes |
| ---- | -- | ---------------- |
| Breadcrumbs | breadcrumbs | Delete when converting. Only needed before because breadcrumbs were not apart of custom template pages. |
| Content | content | Convert to standard content of new WordPress editor. |
| Current Page Content | current | Delete when converting. Not sure how else to handle it since the layout is now part of the content. |
| Divider | divider | Convert to separator block in new WordPress editor. |
| Featured Image | featured_image | Replace with current featured image. Maybe also set custom field for featured image display to be hidden. |
| Headline | headline | Replace with default heading block in new WordPress editor. Replace supported macros like %title% with rendered text. |
| Chart (bar) | chart_bar | Can we find an existing charts plugin to recommend? One that supports Gutenberg? |
| Chart (line) | chart_line | Can we find an existing charts plugin to recommend? One that supports Gutenberg? |
| Chart (pie) | chart_pie | Can we find an existing charts plugin to recommend? One that supports Gutenberg? |
| Custom Field | custom_field | Replace with actual content from custom field (unless Gutenberg adds a solution for adding placeholder before WP 5 release). |
| Google Map | map | Find Google Map plugin to recommend instead. |
| HTML | html | Convert to new WordPress editor's HTML block. |
| Hero | jumbotron | Replace with new "hero" plugin. |
| Hero Slider | jumbotron_slider | Replace with new "hero" plugin. |
| Image | image | Convert to image in new WordPress editor. |
| Milestong Ring | milestone_ring | Replace with Milestone block. |
| Quote | quote | Convert to standard blockquote in new WordPress editor. |
| Video | video | Convert to standard embed in new WordPress editor. |

## Creator

**Jason Bobich**

* <http://jasonbobich.com>
* <https://twitter.com/jasonbobich>
* <http://themeblvd.com>
* <http://wpjumpstart.com>
