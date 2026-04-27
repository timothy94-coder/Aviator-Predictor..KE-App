"use client";

import { useState, useEffect } from "react";
import {
  Plane,
  Shield,
  Mail,
  Lock,
  Zap,
  CheckCircle2,
  TrendingUp,
  Download,
  Sparkles,
  Wifi,
  Globe,
  Rocket,
  ChevronRight,
  Activity,
  Timer,
  Star,
} from "lucide-react";

export default function AviatorV12Page() {
  const [email, setEmail] = useState("");
  const [prediction, setPrediction] = useState("12.84x");
  const [time, setTime] = useState(0);
  const [showModal, setShowModal] = useState(false);
const [phone, setPhone] = useState("");
const [loading, setLoading] = useState(false);

  const predictions = [
    "12.84x",
    "8.29x",
    "21.47x",
    "17.13x",
    "34.88x",
    "9.52x",
    "27.91x",
    "15.66x",
  ];

  useEffect(() => {
    const predictionInterval = setInterval(() => {
      const random =
        predictions[Math.floor(Math.random() * predictions.length)];
      setPrediction(random);
    }, 3000);

    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(predictionInterval);
      clearInterval(timer);
    };
  }, []);

  const formatTime = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const sec = secs % 60;
    return [hrs, mins, sec]
      .map((v) => v.toString().padStart(2, "0"))
      .join(":");
  };

  return (
    <main className="min-h-screen bg-[#050814] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,0,0.18),_transparent_60%)] pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-md mx-auto px-5 py-8">

<div className="text-center mb-10">
  {/* Real Aviator Logo */}
  <div className="relative inline-block mb-8">
  <div className="absolute inset-0 rounded-full bg-green-500 blur-[80px] opacity-40 animate-pulse" />

  <div className="relative w-48 h-48 rounded-full border-4 border-green-500 bg-[#11162a] flex items-center justify-center shadow-[0_0_80px_rgba(0,255,0,0.55)] overflow-hidden">
    <img
      src="/aviator-logo.png"
      alt="Aviator Logo"
      className="w-44 h-44 object-contain animate-pulse drop-shadow-[0_0_30px_rgba(0,255,0,0.8)] scale-110"
    />
  </div>
</div>

  <h1 className="text-5xl font-black tracking-[0.2em] bg-gradient-to-r from-white via-green-300 to-green-500 bg-clip-text text-transparent">
    AVIATOR
  </h1>

  <h2 className="text-green-400 text-3xl font-extrabold mt-2 animate-pulse">
    V12.0.10 APP
  </h2>

  <p className="text-gray-400 mt-4 text-lg">
    Ultimate Predictor + Built-in VPN + Auto Signal Engine
  </p>

  <div className="flex justify-center gap-3 mt-5 flex-wrap">
    <span className="px-4 py-2 rounded-full bg-green-500/20 border border-green-500 text-green-400 text-sm font-bold">
      98.7% Accuracy
    </span>

    <span className="px-4 py-2 rounded-full bg-red-500/20 border border-red-500 text-red-400 text-sm font-bold">
      Phones & PC Compatible
    </span>
  </div>
</div>

        {/* Live Prediction */}
        <section className="bg-[#11162a] border-2 border-green-500 rounded-3xl p-7 mb-6 shadow-[0_0_35px_rgba(0,255,0,0.2)]">
          <div className="flex items-center gap-3 mb-5">
            <TrendingUp className="text-green-400" />
            <h3 className="text-xl font-bold">Live Prediction Sample</h3>
          </div>

          <div className="text-center py-8">
            <p className="text-gray-400 mb-2">Next Crash Estimate</p>
            <h2 className="text-6xl font-black text-green-400 animate-pulse">
              {prediction}
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-3 mt-6">
            {["3.44x", "18.2x", "7.91x", "24.8x"].map((item) => (
              <div
                key={item}
                className="bg-[#1a2140] rounded-2xl py-3 text-center text-green-400 font-bold"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="space-y-4 mb-6">
          {[
            {
              icon: Shield,
              title: "Military VPN Protection",
              desc: "Secure encrypted global servers included.",
            },
            {
              icon: Zap,
              title: "AI Prediction Engine",
              desc: "Ultra-fast multiplier analysis algorithm.",
            },
            {
              icon: Wifi,
              title: "Low Latency Servers",
              desc: "Optimized for instant signal delivery.",
            },
            {
              icon: Globe,
              title: "Worldwide Access",
              desc: "Works in every supported country.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[#11162a] border border-green-500 rounded-3xl p-5"
            >
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1a2140] flex items-center justify-center">
                  <feature.icon className="text-green-400 w-7 h-7" />
                </div>

                <div>
                  <h4 className="font-bold text-lg">{feature.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* How It Works */}
        <section className="bg-[#11162a] border-2 border-green-500 rounded-3xl p-6 mb-6">
          <h3 className="text-2xl font-bold mb-5 flex items-center gap-3">
            <Rocket className="text-green-400" />
            How It Works
          </h3>

          <div className="space-y-5">
            {[
              "Download and install the premium APK instantly.",
              "Built-in VPN connects automatically.",
              "AI analyzes live Aviator patterns in real time.",
              "Receive precise entry and cashout signals.",
              "Boost winning accuracy with smart predictions.",
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-9 h-9 rounded-full bg-green-500 text-black font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <p className="text-gray-300 flex-1">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Email Form */}
        <section className="bg-[#11162a] border-2 border-green-500 rounded-3xl p-6 mb-6">
          <h3 className="text-2xl font-bold mb-5">
            Get Instant CODE🔥
          </h3>

          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-green-400" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1a2140] border border-green-500 rounded-2xl py-4 pl-14 pr-4 outline-none text-white"
              />
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Lock className="w-4 h-4 text-green-400" />
              Secure delivery to your email after payment.
            </div>
          </div>
        </section>

        {/* Price */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-6 text-black mb-6">
          <div className="text-center">
            <p className="font-semibold">One Time Purchase</p>
            <h2 className="text-6xl font-black mt-2"></h2>
            <p className="mt-3 font-medium">
              Lifetime Access + Free Updates
            </p>
          </div>
        </section>

        <button
  type="button"
  onClick={() => {
    console.log("clicked"); // DEBUG
    setShowModal(true);
  }}
  className="w-full py-6 rounded-full bg-red-600 hover:bg-red-700 text-white text-2xl font-black tracking-[0.15em] mb-8"
>
  DOWNLOAD NOW
</button>

{showModal && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
    onClick={() => setShowModal(false)}
  >
    {/* stop click from closing modal */}
    <div
      className="bg-[#11162a] border-2 border-green-500 rounded-3xl w-[90%] max-w-sm p-6"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-white text-2xl font-black text-center">
        Aviator V12 Download
      </h2>

      <p className="text-green-400 text-center text-sm mt-1">
        Secure Payment Portal
      </p>

      <div className="mt-4 bg-[#1a2140] p-3 rounded-xl text-gray-300 text-sm">
        ✔ AI Predictor Engine<br />
        ✔ Built-in VPN<br />
        ✔ Instant signals<br />
        ✔ Mobile + PC download<br />
        ✔ Email activation code
      </div>

      <div className="mt-4 bg-green-600 text-black font-bold text-center py-2 rounded-xl">
        PAY KSH 799
      </div>

      <input
        type="tel"
        placeholder="Enter M-PESA (07 / 01 / 254)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full mt-4 px-4 py-3 rounded-xl bg-[#1a2140] border border-green-500 text-white outline-none"
      />

<button
  type="button"
  onClick={async () => {
    if (!phone.trim()) {
      alert("Enter your M-PESA phone number");
      return;
    }

    let formattedPhone = phone.replace(/\D/g, "");

    if (
      formattedPhone.startsWith("07") ||
      formattedPhone.startsWith("01")
    ) {
      formattedPhone = "254" + formattedPhone.slice(1);
    } else if (!formattedPhone.startsWith("254")) {
      alert("Enter a valid Kenyan phone number");
      return;
    }

    setLoading(true);

    const BACKEND_URL =
      process.env.NEXT_PUBLIC_BACKEND_URL ||
      "https://starlink-backend-yb3n.onrender.com";

    try {
      const response = await fetch(
        `${BACKEND_URL}/api/runPrompt`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            phone: formattedPhone,
            amount: 799,
            local_id: `AVIATOR_${Date.now()}`,
            transaction_desc:
              "Aviator V12 Predictor Premium Activation",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Server responded with ${response.status}`
        );
      }

      const data = await response.json();

      if (data.status) {
        alert(
          "STK Push sent successfully! Check your phone and enter your M-PESA PIN."
        );
        setShowModal(false);
        setPhone("");
      } else {
        alert(
          data.message ||
            "Payment request failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Payment Error:", error);

      alert(
        "Unable to connect to payment server.\n\n" +
          "Possible causes:\n" +
          "• Backend server is sleeping\n" +
          "• CORS is not enabled\n" +
          "• Server URL is incorrect\n\n" +
          "Please try again in a few seconds."
      );
    } finally {
      setLoading(false);
    }
  }}
  disabled={loading}
  className="w-full mt-4 py-4 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-black rounded-xl transition-all duration-300"
>
  {loading ? "Processing Payment..." : "PAY & DOWNLOAD"}
</button>
      <p className="text-[10px] text-gray-400 text-center mt-3">
        After payment, download + code sent to email
      </p>
    </div>
  </div>
)}



        {/* Stats */}
        <section className="grid grid-cols-2 gap-4 mb-6">
          <StatCard
            icon={<Activity className="text-green-400" />}
            label="Accuracy"
            value="98.7%"
          />
          <StatCard
            icon={<Timer className="text-green-400" />}
            label="Runtime"
            value={formatTime(time)}
          />
        </section>

        {/* Testimonials */}
       {/* Replace ONLY the Testimonials section with this */}

<section className="bg-[#11162a] border border-green-500 rounded-3xl p-6 mb-8 overflow-hidden">
  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
    <Star className="text-green-400" />
    Live User Results
  </h3>

  <div className="relative overflow-hidden">
    <div className="flex gap-4 animate-[scroll_25s_linear_infinite] w-max">
      {[
        {
          name: "Brian M.",
          amount: "KSh 18,500",
          review: "Won KSh 18,500 in one night using Aviator V12.",
        },
        {
          name: "Kevin T.",
          amount: "KSh 42,300",
          review: "Best Aviator predictor app I've ever used.",
        },
        {
          name: "Sarah W.",
          amount: "KSh 26,800",
          review: "VPN and predictions work flawlessly every day.",
        },
        {
          name: "Daniel K.",
          amount: "KSh 63,900",
          review: "Recovered my investment in just two rounds.",
        },
        {
          name: "Brian M.",
          amount: "KSh 18,500",
          review: "Won KSh 18,500 in one night using Aviator V12.",
        },
        {
          name: "Kevin T.",
          amount: "KSh 42,300",
          review: "Best Aviator predictor app I've ever used.",
        },
        {
          name: "Sarah W.",
          amount: "KSh 26,800",
          review: "VPN and predictions work flawlessly every day.",
        },
        {
          name: "Daniel K.",
          amount: "KSh 63,900",
          review: "Recovered my investment in just two rounds.",
        },
      ].map((review, i) => (
        <div
          key={i}
          className="min-w-[320px] max-w-[320px] bg-[#1a2140] border border-green-500/30 rounded-2xl p-5 flex-shrink-0 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="font-bold text-white">
                {review.name}
              </h4>
              <p className="text-green-400 text-sm">
                Profit: {review.amount}
              </p>
            </div>

            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className="w-4 h-4 fill-current"
                />
              ))}
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            "{review.review}"
          </p>
        </div>
      ))}
    </div>
  </div>

  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}</style>
</section>

<footer className="mt-10 border-t border-green-500/30 pt-6 text-gray-400 text-xs">

  {/* Brand */}
  <div className="text-center mb-4">
    <h4 className="text-green-400 text-lg font-black tracking-widest">
      AVIATOR V12.0.10
    </h4>
    <p className="text-gray-500 mt-1">
      AI Predictor + VPN Secure System
    </p>
  </div>

  {/* Contact */}
  <div className="flex flex-col items-center gap-2 mb-4">
    <p>📧 support@aviatorv12.app</p>
    <p>📞 +254 700 000 000</p>
    <p>💬 WhatsApp Support: Available 24/7</p>
  </div>

  {/* Info */}
  <div className="flex flex-wrap justify-center gap-3 text-center mb-4">
    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
      Secure Payments
    </span>
    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
      Instant Delivery
    </span>
    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
      Mobile & PC
    </span>
  </div>

  {/* Disclaimer */}
  <p className="text-center text-[10px] text-gray-500 leading-relaxed px-4">
    This application is an independent predictive tool. We do not guarantee winnings.
    Use responsibly. All payments are securely processed via M-PESA.
  </p>

  {/* Bottom line */}
  <p className="text-center text-[10px] mt-4 text-gray-600">
    © {new Date().getFullYear()} Aviator V12. All rights reserved.
  </p>

</footer>
      </div>
    </main>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-[#11162a] border border-green-500 rounded-3xl p-5 text-center">
      <div className="flex justify-center mb-3">{icon}</div>
      <p className="text-gray-400 text-sm">{label}</p>
      <h3 className="text-2xl font-bold text-green-400 mt-2">
        {value}
      </h3>
    </div>
  );
}