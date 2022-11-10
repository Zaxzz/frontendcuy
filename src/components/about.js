import about from "./asset/about.png";
import css from "./asset/css.png";
import figma from "./asset/figma.png";
import flutter from "./asset/flutter.png";
import html from "./asset/html.png";
import js from "./asset/js.png";
import php from "./asset/php.png";
import unity from "./asset/unity.png";
import unreal from "./asset/unreal.png";
import vscode from "./asset/vscode.png";

const About = () => {
  return (
      <div className="bg-white">
        <div className="items-center text-center opacity-70 rounded-none rounded-tr-lg rounded-bl-lg card w-full shadow-2xl bg-green">
          <div className="card-body">
              <label className="label">
                <span className="label-text font-bold text-5xl text-black">About</span>
              </label>
          </div>
        </div>
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={about} alt="About"/>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-green border-2 rounded-3xl border-black text-black">
              <div class="card-body">
                <p>
                SMK Negeri 2 Magelang adalah sekolah yang terletak di Kota Magelang, Jawa Tengah.
                <br />
                SMKN 2 Magelang memiliki 4 jurusan yaitu Akutansi, Perkantoran, Pemasaran, dan PPLG yang diincar siswa-siswi dari seluruh penjuru Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center text-center opacity-70 rounded-none rounded-tr-lg rounded-bl-lg card w-full">
          <div className="card-body">
            <label className="label">
              <span className="label-text font-bold text-5xl text-black">What We Learn</span>
            </label>
          </div>
        </div>
        <div class="hero min-h-screen">
          <div class="hero-content">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-krem h-64 w-56 rounded-lg border-solid border-black border-8 items-center justify-center flex">
                <img src={html} alt="HTML"/>
              </div>
              <div className="bg-krem h-64 w-56 rounded-lg border-solid border-black border-8 items-center justify-center flex">
                <img src={css} alt="CSS"/>
              </div>
              <div className="bg-krem h-64 w-56 rounded-lg border-solid border-black border-8 items-center justify-center flex">
                <img src={js} alt="JS"/>
              </div>
              <div className="bg-krem h-64 w-56 rounded-lg border-solid border-black border-8 items-center justify-center flex">
                <img src={php} alt="PHP"/>
              </div>
              <div className="bg-krem h-64 w-56 rounded-lg border-solid border-black border-8 items-center justify-center flex">
                <img src={vscode} alt="VSCODE"/>
              </div>
              <div className="bg-krem h-64 w-56 rounded-lg border-solid border-black border-8 items-center justify-center flex">
                <img src={figma} alt="FIGMA"/>
              </div>
              <div className="bg-krem h-64 w-56 rounded-lg border-solid border-black border-8 items-center justify-center flex">
                <img src={flutter} alt="FLUTTER"/>
              </div>
              <div className="bg-krem h-64 w-56 rounded-lg border-solid border-black border-8 items-center justify-center flex">
                <img src={unreal} alt="UNREAL"/>
              </div>
              <div className="bg-krem h-64 w-56 rounded-lg border-solid border-black border-8 items-center justify-center flex">
                <img src={unity} alt="UNITY"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
