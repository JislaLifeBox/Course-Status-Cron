import { app, InvocationContext, Timer } from "@azure/functions";

export async function courseStatusCron(myTimer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
}

app.timer('courseStatusCron', {
    schedule: '0 0 1 * * *',
    handler: courseStatusCron
});
