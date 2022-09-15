const db = require("../db/index");

class Song {
  constructor(artist_name, songname, genre, publish_year) {
    this.artist_name = artist_name;
    this.songname = songname;
    this.genre = genre;
    this.publish_year = publish_year;
  }

  save() {
    let sql = `
    INSERT INTO new_schema.songs(
        artist_name,
        songname,
        genre,
        publish_year
    )
    VALUES(
      '${this.artist_name}',
      '${this.songname}',
      '${this.genre}',
      '${this.publish_year}'
    )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM new_schema.songs;";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM new_schema.songs WHERE id = ${id};`;

    return db.execute(sql);
  }
}

module.exports = Song;