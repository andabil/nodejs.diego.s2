import command from './command';

async function init() {
  try {
    await command('git fetch --all');
  } catch(e) {
    console.error('An error baby: ', e);
  }

//  const {stdout} = await command('dir');
//  console.log('result: ', stdout);
}

init();