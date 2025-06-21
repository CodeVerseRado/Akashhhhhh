

module.exports = {
  TOKEN: "MTM4NTU0MDcxMTU5NTY0Mjg5MQ.GE1YEJ.IWNdC2sb-mlud7SnBcgSy0rPNPIZeE44Niwmz4",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://codex-in2:codex-in2@codex-in2.gjv2c.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "db0038dac3a5456d8039d1c0e4d6f4a2",
  spotifyClientSecret : "6d3eb51242bb4ea68ddcdce6f50c71fa",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "5.39.63.207",
      port:  8262,
      secure: false
    }
  ]
}
