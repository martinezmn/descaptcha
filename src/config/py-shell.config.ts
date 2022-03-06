export function DocumentOptions (mp3Url: string) {
  const options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: './src/scripts/',
    args: [mp3Url]
  }

  return options
}