import { Show } from "solid-js";
import { A, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

export function routeData(){
  return  createServerData$(async (_, event) => {
    return JSON.stringify(event.request.headers) as string
  })
}

export default function Home() {
  const eventRequestStr = useRouteData<typeof routeData>();
  
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      huh
      {eventRequestStr}
      <Show when={!eventRequestStr.loading}>
        {eventRequestStr.latest}
      </Show>
    </main>
  );
}
