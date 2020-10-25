import fetch from "node-fetch";

class DashData {
  async getToday() {
    const todayResponse = await fetch("../assets/data.json")
      .then(res => res.json())
      .then(data => console.log(data));

    const today = await todayResponse.json();

    return {
      today
    };
  }
}
