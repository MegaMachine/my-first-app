export class LoggingService {
  logStatesChange( status: string) {
    console.log('A server status changed, new status: ' + status );
  }
}
