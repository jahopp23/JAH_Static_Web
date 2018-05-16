{
  "bucket": {
    "_id": "5afa3e56c4f4fe66c8fa15e6",
    "slug": "static-web-site-personal",
    "title": "Static Web Site Personal",
    "object_types": [
      {
        "title": "Pages",
        "slug": "pages",
        "singular": "Page",
        "metafields": [
          {
            "value": "",
            "key": "headline",
            "title": "Headline",
            "type": "text",
            "children": null
          },
          {
            "value": "",
            "key": "hero",
            "title": "Hero",
            "type": "file",
            "children": null
          }
        ],
        "order": 2
      },
      {
        "title": "Globals",
        "slug": "globals",
        "singular": "Global",
        "metafields": [],
        "order": 1
      }
    ],
    "links": [],
    "objects": [
      {
        "_id": "5afa3ee86327325fd2ab130f",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "slug": "home",
        "title": "Home",
        "content": "<div>I am a Web Developer living in the Dallas, Texas area and I specialize in UI/UX, and, HTML, CSS, JavaScript, Ruby. and Python programming languages. I can code Full Stack Web applications from scratch, utilize the latest Responsive-Web techniques, and deploy apps using &nbsp;tools like Amazon or Heroku.&nbsp;</div>",
        "metafields": [
          {
            "value": "Welcome!",
            "key": "headline",
            "title": "Headline",
            "type": "text",
            "children": null
          },
          {
            "value": "bcb45970-94bb-11e6-b575-65f510fd43cc-Earth-From-Space-Space.jpg",
            "key": "hero",
            "title": "Hero",
            "type": "file",
            "children": null,
            "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/bcb45970-94bb-11e6-b575-65f510fd43cc-Earth-From-Space-Space.jpg",
            "imgix_url": "https://cosmic-s3.imgix.net/bcb45970-94bb-11e6-b575-65f510fd43cc-Earth-From-Space-Space.jpg"
          }
        ],
        "type_slug": "pages",
        "created": "2016-10-17T22:33:48.542Z",
        "created_at": "2016-10-17T22:33:48.542Z",
        "modified_at": "2018-05-15T02:18:25.598Z",
        "options": {
          "content_editor": 1,
          "slug_field": 1
        },
        "order": 1,
        "status": "published",
        "published_at": "2018-05-15T02:18:25.598Z",
        "modified_by": "5af892858925dc4692f74dca",
        "publish_at": null,
        "metadata": {
          "headline": "Welcome!",
          "hero": {
            "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/bcb45970-94bb-11e6-b575-65f510fd43cc-Earth-From-Space-Space.jpg",
            "imgix_url": "https://cosmic-s3.imgix.net/bcb45970-94bb-11e6-b575-65f510fd43cc-Earth-From-Space-Space.jpg"
          }
        }
      },
      {
        "_id": "5afa3ee86327325fd2ab1310",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "slug": "header",
        "title": "Header",
        "content": "",
        "metafields": [
          {
            "repeater_fields": [
              {
                "title": "Title",
                "key": "title",
                "value": "",
                "type": "text"
              },
              {
                "title": "Link",
                "key": "link",
                "value": "",
                "type": "text"
              }
            ],
            "value": "Home",
            "key": "nav_links",
            "title": "Nav Links",
            "type": "repeater",
            "children": [
              {
                "type": "repeating_item",
                "children": [
                  {
                    "title": "Title",
                    "key": "title",
                    "value": "Home",
                    "type": "text"
                  },
                  {
                    "title": "Link",
                    "key": "link",
                    "value": "/",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "repeating_item",
                "children": [
                  {
                    "title": "Title",
                    "key": "title",
                    "value": "About",
                    "type": "text"
                  },
                  {
                    "title": "Link",
                    "key": "link",
                    "value": "/about",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "repeating_item",
                "children": [
                  {
                    "title": "Title",
                    "key": "title",
                    "value": "Contact",
                    "type": "text"
                  },
                  {
                    "title": "Link",
                    "key": "link",
                    "value": "/contact",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "repeating_item",
                "children": [
                  {
                    "title": "Title",
                    "key": "title",
                    "value": "Work",
                    "type": "text"
                  },
                  {
                    "title": "Link",
                    "key": "link",
                    "value": "/work",
                    "type": "text"
                  }
                ]
              }
            ]
          },
          {
            "value": "Static Website",
            "key": "site_title",
            "title": "Site Title",
            "type": "text",
            "children": null
          },
          {
            "value": "f5dfec00-99fc-11e6-8103-8117827beac1-lightning-32x32.png",
            "key": "favicon_32",
            "title": "Favicon 32",
            "type": "file",
            "children": null,
            "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/f5dfec00-99fc-11e6-8103-8117827beac1-lightning-32x32.png",
            "imgix_url": "https://cosmic-s3.imgix.net/f5dfec00-99fc-11e6-8103-8117827beac1-lightning-32x32.png"
          },
          {
            "value": "1087f520-99fd-11e6-8103-8117827beac1-lightning-16x16.png",
            "key": "favicon_16",
            "title": "Favicon 16",
            "type": "file",
            "children": null,
            "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/1087f520-99fd-11e6-8103-8117827beac1-lightning-16x16.png",
            "imgix_url": "https://cosmic-s3.imgix.net/1087f520-99fd-11e6-8103-8117827beac1-lightning-16x16.png"
          }
        ],
        "type_slug": "globals",
        "created": "2016-10-17T22:38:25.011Z",
        "created_at": "2016-10-17T22:38:25.011Z",
        "modified_at": "2017-01-08T08:05:17.086Z",
        "options": {
          "slug_field": 0,
          "content_editor": 0
        },
        "order": 1,
        "status": "published",
        "published_at": "2018-05-15T01:59:04.527Z",
        "metadata": {
          "nav_links": [
            {
              "title": "Home",
              "link": "/"
            },
            {
              "title": "About",
              "link": "/about"
            },
            {
              "title": "Contact",
              "link": "/contact"
            },
            {
              "title": "Work",
              "link": "/work"
            }
          ],
          "site_title": "Static Website",
          "favicon_32": {
            "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/f5dfec00-99fc-11e6-8103-8117827beac1-lightning-32x32.png",
            "imgix_url": "https://cosmic-s3.imgix.net/f5dfec00-99fc-11e6-8103-8117827beac1-lightning-32x32.png"
          },
          "favicon_16": {
            "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/1087f520-99fd-11e6-8103-8117827beac1-lightning-16x16.png",
            "imgix_url": "https://cosmic-s3.imgix.net/1087f520-99fd-11e6-8103-8117827beac1-lightning-16x16.png"
          }
        }
      },
      {
        "_id": "5afa3ee86327325fd2ab1311",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "slug": "about",
        "title": "About",
        "content": "<div>Dinosaurs are extinct today because they lacked opposable thumbs and the brainpower to build a space program.</div><div><br></div><div>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</div><div><br></div><div>We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.</div><div><br></div><div>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore . . . and this is exploration at its greatest.</div><div><br></div><div>Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.</div>",
        "metafields": [
          {
            "value": "An API-Powered Static Website",
            "key": "headline",
            "title": "Headline",
            "type": "text",
            "children": null
          },
          {
            "value": "c3a7fb60-94bb-11e6-b575-65f510fd43cc-Galaxy.jpg",
            "key": "hero",
            "title": "Hero",
            "type": "file",
            "children": null,
            "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/c3a7fb60-94bb-11e6-b575-65f510fd43cc-Galaxy.jpg",
            "imgix_url": "https://cosmic-s3.imgix.net/c3a7fb60-94bb-11e6-b575-65f510fd43cc-Galaxy.jpg"
          }
        ],
        "type_slug": "pages",
        "created": "2016-10-17T22:34:18.722Z",
        "created_at": "2016-10-17T22:34:18.722Z",
        "modified_at": "2016-10-24T05:43:45.992Z",
        "options": {
          "slug_field": 1,
          "content_editor": 1
        },
        "order": 2,
        "status": "published",
        "published_at": "2018-05-15T01:59:04.528Z",
        "metadata": {
          "headline": "An API-Powered Static Website",
          "hero": {
            "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/c3a7fb60-94bb-11e6-b575-65f510fd43cc-Galaxy.jpg",
            "imgix_url": "https://cosmic-s3.imgix.net/c3a7fb60-94bb-11e6-b575-65f510fd43cc-Galaxy.jpg"
          }
        }
      },
      {
        "_id": "5afa3ee86327325fd2ab1312",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "slug": "footer",
        "title": "Footer",
        "content": "",
        "metafields": [
          {
            "value": "<p>Lorem Ipsum provided by <a href=\"http://spaceipsum.com\" target=\"_blank\">Space Ipsum</a></p>",
            "key": "lorem_ipsum",
            "title": "Lorem Ipsum",
            "type": "html-textarea",
            "children": null
          },
          {
            "value": "Cosmic JS",
            "key": "company_title",
            "title": "Company Title",
            "type": "text",
            "children": null
          },
          {
            "value": "https://github.com/cosmicjs",
            "key": "github",
            "title": "GitHub",
            "type": "text",
            "children": null
          },
          {
            "value": "https://twitter.com/cosmic_js",
            "key": "twitter",
            "title": "Twitter",
            "type": "text",
            "children": null
          }
        ],
        "type_slug": "globals",
        "created": "2016-10-18T18:01:42.625Z",
        "created_at": "2016-10-18T18:01:42.625Z",
        "modified_at": "2016-10-18T19:42:58.227Z",
        "options": {
          "slug_field": 0,
          "content_editor": 0
        },
        "order": 2,
        "status": "published",
        "published_at": "2018-05-15T01:59:04.529Z",
        "metadata": {
          "lorem_ipsum": "<p>Lorem Ipsum provided by <a href=\"http://spaceipsum.com\" target=\"_blank\">Space Ipsum</a></p>",
          "company_title": "Cosmic JS",
          "github": "https://github.com/cosmicjs",
          "twitter": "https://twitter.com/cosmic_js"
        }
      },
      {
        "_id": "5afa3ee86327325fd2ab1313",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "slug": "contact",
        "title": "Contact",
        "content": "<div>Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.</div><div><br></div><div>To go places and do things that have never been done before – that’s what living is all about.</div><div><br></div><div>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</div>",
        "metafields": [
          {
            "value": "Contact Me",
            "key": "headline",
            "title": "Headline",
            "type": "text",
            "children": null
          },
          {
            "value": "cbd4e0a0-94bb-11e6-b575-65f510fd43cc-outer-space-1920x1200-hd-wallpaper.jpg",
            "key": "hero",
            "title": "Hero",
            "type": "file",
            "children": null,
            "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/cbd4e0a0-94bb-11e6-b575-65f510fd43cc-outer-space-1920x1200-hd-wallpaper.jpg",
            "imgix_url": "https://cosmic-s3.imgix.net/cbd4e0a0-94bb-11e6-b575-65f510fd43cc-outer-space-1920x1200-hd-wallpaper.jpg"
          }
        ],
        "type_slug": "pages",
        "created": "2016-10-17T22:35:07.275Z",
        "created_at": "2016-10-17T22:35:07.275Z",
        "modified_at": "2016-10-18T21:02:23.139Z",
        "options": {
          "slug_field": 1,
          "content_editor": 1
        },
        "order": 3,
        "status": "published",
        "published_at": "2018-05-15T01:59:04.530Z",
        "metadata": {
          "headline": "Contact Me",
          "hero": {
            "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/cbd4e0a0-94bb-11e6-b575-65f510fd43cc-outer-space-1920x1200-hd-wallpaper.jpg",
            "imgix_url": "https://cosmic-s3.imgix.net/cbd4e0a0-94bb-11e6-b575-65f510fd43cc-outer-space-1920x1200-hd-wallpaper.jpg"
          }
        }
      },
      {
        "_id": "5afa3ee86327325fd2ab1314",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "slug": "work",
        "title": "Work",
        "content": "<p><img src=\"https://cosmicjs.com/uploads/0de1a080-961c-11e6-8afd-2319bb61fbf1-4halbe6.gif\" data-filename=\"https://cosmicjs.com/uploads/0de1a080-961c-11e6-8afd-2319bb61fbf1-4halbe6.gif\" style=\"width: 400px;\"><br></p>",
        "metafields": [
          {
            "value": "Werkin It...",
            "key": "headline",
            "title": "Headline",
            "type": "text",
            "children": null
          },
          {
            "value": "3044d7c0-9610-11e6-8afd-2319bb61fbf1-fantasy_space-wide.jpg",
            "key": "hero",
            "title": "Hero",
            "type": "file",
            "children": null,
            "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/3044d7c0-9610-11e6-8afd-2319bb61fbf1-fantasy_space-wide.jpg",
            "imgix_url": "https://cosmic-s3.imgix.net/3044d7c0-9610-11e6-8afd-2319bb61fbf1-fantasy_space-wide.jpg"
          }
        ],
        "type_slug": "pages",
        "created": "2016-10-19T15:24:58.084Z",
        "created_at": "2016-10-19T15:24:58.084Z",
        "modified_at": "2016-10-19T16:49:56.248Z",
        "options": {
          "slug_field": 1,
          "content_editor": 1
        },
        "order": 4,
        "status": "published",
        "published_at": "2018-05-15T01:59:04.531Z",
        "metadata": {
          "headline": "Werkin It...",
          "hero": {
            "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/3044d7c0-9610-11e6-8afd-2319bb61fbf1-fantasy_space-wide.jpg",
            "imgix_url": "https://cosmic-s3.imgix.net/3044d7c0-9610-11e6-8afd-2319bb61fbf1-fantasy_space-wide.jpg"
          }
        }
      }
    ],
    "media": [
      {
        "_id": "5afa3ee86327325fd2ab1315",
        "name": "bcb45970-94bb-11e6-b575-65f510fd43cc-Earth-From-Space-Space.jpg",
        "original_name": "Earth-From-Space-Space.jpg",
        "size": 337085,
        "type": "image/jpeg",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "created": "2016-10-17T22:47:52.736Z",
        "folder": null,
        "location": "https://s3-us-west-2.amazonaws.com/cosmicjs",
        "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/bcb45970-94bb-11e6-b575-65f510fd43cc-Earth-From-Space-Space.jpg",
        "imgix_url": "https://cosmic-s3.imgix.net/bcb45970-94bb-11e6-b575-65f510fd43cc-Earth-From-Space-Space.jpg"
      },
      {
        "_id": "5afa3ee86327325fd2ab1316",
        "name": "c3a7fb60-94bb-11e6-b575-65f510fd43cc-Galaxy.jpg",
        "original_name": "Galaxy.jpg",
        "size": 476848,
        "type": "image/jpeg",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "created": "2016-10-17T22:48:04.407Z",
        "folder": null,
        "location": "https://s3-us-west-2.amazonaws.com/cosmicjs",
        "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/c3a7fb60-94bb-11e6-b575-65f510fd43cc-Galaxy.jpg",
        "imgix_url": "https://cosmic-s3.imgix.net/c3a7fb60-94bb-11e6-b575-65f510fd43cc-Galaxy.jpg"
      },
      {
        "_id": "5afa3ee86327325fd2ab1317",
        "name": "cbd4e0a0-94bb-11e6-b575-65f510fd43cc-outer-space-1920x1200-hd-wallpaper.jpg",
        "original_name": "outer-space-1920x1200-hd-wallpaper.jpg",
        "size": 362706,
        "type": "image/jpeg",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "created": "2016-10-17T22:48:18.113Z",
        "folder": null,
        "location": "https://s3-us-west-2.amazonaws.com/cosmicjs",
        "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/cbd4e0a0-94bb-11e6-b575-65f510fd43cc-outer-space-1920x1200-hd-wallpaper.jpg",
        "imgix_url": "https://cosmic-s3.imgix.net/cbd4e0a0-94bb-11e6-b575-65f510fd43cc-outer-space-1920x1200-hd-wallpaper.jpg"
      },
      {
        "_id": "5afa3ee86327325fd2ab1318",
        "name": "ad347fb0-9575-11e6-b575-65f510fd43cc-kjjX6mj.jpg",
        "original_name": "kjjX6mj.jpg",
        "size": 240113,
        "type": "image/jpeg",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "created": "2016-10-18T20:58:53.232Z",
        "folder": null,
        "location": "https://s3-us-west-2.amazonaws.com/cosmicjs",
        "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/ad347fb0-9575-11e6-b575-65f510fd43cc-kjjX6mj.jpg",
        "imgix_url": "https://cosmic-s3.imgix.net/ad347fb0-9575-11e6-b575-65f510fd43cc-kjjX6mj.jpg"
      },
      {
        "_id": "5afa3ee86327325fd2ab1319",
        "name": "3044d7c0-9610-11e6-8afd-2319bb61fbf1-fantasy_space-wide.jpg",
        "original_name": "fantasy_space-wide.jpg",
        "size": 1753167,
        "type": "image/jpeg",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "created": "2016-10-19T15:24:55.557Z",
        "folder": null,
        "location": "https://s3-us-west-2.amazonaws.com/cosmicjs",
        "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/3044d7c0-9610-11e6-8afd-2319bb61fbf1-fantasy_space-wide.jpg",
        "imgix_url": "https://cosmic-s3.imgix.net/3044d7c0-9610-11e6-8afd-2319bb61fbf1-fantasy_space-wide.jpg"
      },
      {
        "_id": "5afa3ee86327325fd2ab131a",
        "name": "0de1a080-961c-11e6-8afd-2319bb61fbf1-4halbe6.gif",
        "original_name": "4halbe6.gif",
        "size": 4771724,
        "type": "image/gif",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "created": "2016-10-19T16:49:51.896Z",
        "location": "https://s3-us-west-2.amazonaws.com/cosmicjs",
        "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/0de1a080-961c-11e6-8afd-2319bb61fbf1-4halbe6.gif",
        "imgix_url": "https://cosmic-s3.imgix.net/0de1a080-961c-11e6-8afd-2319bb61fbf1-4halbe6.gif"
      },
      {
        "_id": "5afa3ee86327325fd2ab131b",
        "name": "f5dfec00-99fc-11e6-8103-8117827beac1-lightning-32x32.png",
        "original_name": "lightning-32x32.png",
        "size": 879,
        "type": "image/png",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "created": "2016-10-24T15:17:21.741Z",
        "folder": null,
        "location": "https://s3-us-west-2.amazonaws.com/cosmicjs",
        "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/f5dfec00-99fc-11e6-8103-8117827beac1-lightning-32x32.png",
        "imgix_url": "https://cosmic-s3.imgix.net/f5dfec00-99fc-11e6-8103-8117827beac1-lightning-32x32.png"
      },
      {
        "_id": "5afa3ee86327325fd2ab131c",
        "name": "1087f520-99fd-11e6-8103-8117827beac1-lightning-16x16.png",
        "original_name": "lightning-16x16.png",
        "size": 441,
        "type": "image/png",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "created": "2016-10-24T15:18:06.467Z",
        "folder": null,
        "location": "https://s3-us-west-2.amazonaws.com/cosmicjs",
        "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/1087f520-99fd-11e6-8103-8117827beac1-lightning-16x16.png",
        "imgix_url": "https://cosmic-s3.imgix.net/1087f520-99fd-11e6-8103-8117827beac1-lightning-16x16.png"
      },
      {
        "_id": "5afa3ee86327325fd2ab131d",
        "name": "01c0c800-9a3e-11e6-8103-8117827beac1-html.jpg",
        "original_name": "html.jpg",
        "size": 138568,
        "type": "image/jpeg",
        "bucket": "5afa3e56c4f4fe66c8fa15e6",
        "created": "2016-10-24T23:02:58.958Z",
        "folder": null,
        "location": "https://s3-us-west-2.amazonaws.com/cosmicjs",
        "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/01c0c800-9a3e-11e6-8103-8117827beac1-html.jpg",
        "imgix_url": "https://cosmic-s3.imgix.net/01c0c800-9a3e-11e6-8103-8117827beac1-html.jpg"
      }
    ],
    "media_folders": [],
    "extensions": []
  }
}