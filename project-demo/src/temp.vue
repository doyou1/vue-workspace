  <div className="flex flex-col w-full h-full overflow-y-hidden">
    <div
      className="flex flex-col w-full h-full rounded-lg overflow-x-hidden border-t"
    >
      <main className="w-full h-full p-6 bg-gray-100">
        <div class="flex justify-evenly w-full h-1/3 gap-3 pb-4">
          <!-- <MomentState class="shadow-xl rounded-lg w-1/4 h-full bg-gray-800" /> -->
          <div class="shadow-xl rounded-lg w-1/4 h-full bg-gray-800"></div>
          <div class="flex flex-col w-1/2 h-full">
            <summary-view :data="summaryData" />
            <div class="flex w-full h-1/2 mx-2">
              <!-- <PerchasedState class="shadow-xl rounded-lg w-1/2 h-full mr-1 bg-gray-800" />
              <ConsumptionState class="shadow-xl rounded-lg w-1/2 h-full ml-1 bg-gray-800" /> -->
              <div class="shadow-xl rounded-lg w-1/2 h-full mr-1 bg-gray-800">
                1
              </div>
              <div class="shadow-xl rounded-lg w-1/2 h-full ml-1 bg-gray-800">
                2
              </div>
            </div>
          </div>
          <!-- <Calendar class="w-1/4 h-full" /> -->
          <div class="w-1/4 h-full"></div>
        </div>
      </main>
    </div>
  </div>