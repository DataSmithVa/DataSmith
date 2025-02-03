
const currentTime = "8:00 AM";

export default function PunchClock() {
    return (
        <main className=" grid place-items-center my-4">
            <h5 className=" text-xs font-light">Punch Clock</h5>
            <div className="grid place-items-center p-6 gap-4 w-3/4 md:w-1/4 bg-slate-300 rounded-lg">
                <h1 className="font-poppins font-bold text-2xl">{currentTime}</h1>
                <div className="grid grid-cols-2 gap-4">
                    <input type="button" value="Clock In" className=" text-white py-2 px-8 rounded-full bg-green-500"/>
                    <input type="button" value="Clock Out" className=" text-white rounded-full bg-red-500"/>
                </div>
            </div>
        </main>
    );
}