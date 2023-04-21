import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import mypic from './dp.png'
import nft1 from './nft1.png'
import nft2 from './nft2.png'
import nft3 from './nft3.png'
import nft4 from './nft4.png'
import nft5 from './nft5.png'
import nft6 from './nft6.png'
import nft7 from './nft7.png'
import nft8 from './nft8.png'
import nft9 from './nft9.png'
import bnft1 from './NFT Image 1.png'
import bnft2 from './NFT Image 2.png'
import bnft3 from './NFT Image 3.png'
import bnft4 from './NFT Image 4.png'
import bnft5 from './NFT Image 5.png'
import bg from './Ellipse 217.png'
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'
// import {TwitterIcon,} from 'next-share'
import {TiSocialTwitter} from 'react-icons/ti'
import {TbWorld} from 'react-icons/tb'
import {FaEthereum} from 'react-icons/fa'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.profile}>
          <div className={styles.profiletop}>
            <div className={styles.dpb}>
              <Image src={mypic} className={styles.dp}/>
              <div className={styles.lvl}>
                LVL 2
              </div>
            </div>
            <div>
            <div className={styles.username}>
              dingaling.eth
            </div>
            <div className={styles.address}>
              0xadgf....jkld
            </div>
            </div>
          </div>
          <div className={styles.tweetb}>
          <div className={styles.tweet}>
           <TiSocialTwitter color='#1D9BF0' size="32px" />
           <p> @dingalingts</p>
          </div>
          <div className={styles.web}>
            <div>
              <TbWorld color='#A2A2A2' size="30px"/>
            </div>
          </div>
          </div>
          <div className={styles.description}>
          An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner of 📦  @nftboxes
          </div>
          <div className={styles.cc}>
            Common communties (3)
            <div className={styles.ccnft}>
            <Image src={nft1} className={styles.dp1}/>
            <Image src={nft2} className={styles.dp1}/>
            <Image src={nft3} className={styles.dp1}/>
            <Image src={nft4} className={styles.dp1}/>
            </div>
          </div>
          <div className={styles.perc}>
            <div className={styles.aup}>
              <div className={styles.art}>Art 12%</div>
              <div className={styles.art}>Utility 12%</div>
              <div className={styles.pfp}>PFP 12%</div>
            </div>

            <div className={styles.mg}>
              <div className={styles.pfp}>Metaverse 12%</div>
              <div className={styles.pfp}>Gaming 12%</div>
            </div>

            <div className={styles.pe}>
              <div className={styles.pfp}>PFP 12%</div>
              <div className={styles.pfp}>ens 12%</div>
            </div>
          </div>
          <div className={styles.subscribe}>
            Subscribe <MdOutlineKeyboardDoubleArrowRight color='white'/>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.highlights}>Highlights</p>
          <div className={styles.scContainer}>
            <div className={styles.smallCard}>
              <div className={styles.scupper}>
              <div className={styles.scupperImg}><Image src={nft5}/></div>
              <div>
              <p className={styles.headnft}>ENS linked</p>
              <p className={styles.subheadnft}>ENS linked</p>
              </div>
              </div>
              <div className={styles.list}>
              <div className={styles.listdesc}>
                <p className={styles.lname}>dingaling.eth</p>
                <p className={styles.price}>1.82 <FaEthereum color='#FAFAFA' size='15px'/></p>
              </div>
              <div className={styles.listdet}>
              <p className={styles.ltime}>2 months ago</p>
                <p className={styles.xp}>+200XP</p>
              </div>
              </div>
            </div>
            <div className={styles.smallCard2}>
            <div className={styles.scupper}>
              <div className={styles.scupperImg}><Image src={nft6}/></div>
              <div>
              <p className={styles.headnft}>Best Flip</p>
              <p className={styles.subheadnft2}>Sold</p>
              </div>
              </div>
              <div className={styles.list}>
              <div className={styles.listdesc}>
                <p className={styles.lname}>CryptoPunk #2131</p>
                <p className={styles.price}>98.5 <FaEthereum color='#FAFAFA' size='15px'/></p>
              </div>
              <div className={styles.listdet}>
                <p className={styles.ltime}>10 days ago</p>
                <p className={styles.xp}>+150XP</p>
              </div>
              </div>
            </div>
            <div className={styles.smallCard3}>
            <div className={styles.scupper}>
              <div className={styles.scupperImg}><Image src={nft7}/></div>
              <div>
              <p className={styles.headnft}>Should have...</p>
              <p className={styles.subheadnft3}>Mint</p>
              </div>
              </div>
              <div className={styles.list}>
              <div className={styles.listdesc}>
                <p className={styles.lname}>Rare Apepe #6974</p>
                <p className={styles.price}>98.5 <FaEthereum color='#FAFAFA' size='15px'/></p>
              </div>
              <div className={styles.listdet}>
                <p className={styles.ltime}>10days ago</p>
                <p className={styles.xp}>+200XP</p>
              </div>
              </div>
            </div>
            <div className={styles.smallCard}>
            <div className={styles.scupper}>
              <div className={styles.scupperImg}><Image src={nft8}/></div>
              <div>
              <p className={styles.headnft}>First NFT bought</p>
              <p className={styles.subheadnft}>Bought</p>
              </div>
              </div>
              <div className={styles.list}>
              <div className={styles.listdesc}>
                <p className={styles.lname}>BAYC #7925</p>
                <p className={styles.price}>98.5 <FaEthereum color='#FAFAFA' size='15px'/></p>
              </div>
              <div className={styles.listdet}>
                <p className={styles.ltime}>10 days ago</p>
                <p className={styles.xp}>+10XP</p>
              </div>
              </div>
            </div>
            <div className={styles.smallCard3}>
              <div className={styles.scupper}>
                <div className={styles.scupperImg}><Image src={nft9}/></div>
                <div>
                  <p className={styles.headnft}>Paper Handed</p>
                  <p className={styles.subheadnft3}>Sold</p>
                </div>
              </div>
              <div className={styles.list}>
              <div className={styles.listdesc}>
                <p className={styles.lname}>Moonbird #7866</p>
                <p className={styles.price}>98.5 <FaEthereum color='#FAFAFA' size='15px'/></p>
              </div>
              <div className={styles.listdet}>
                <p className={styles.ltime}>10 days ago</p>
                <p className={styles.xp}>+200XP</p>
              </div>
              </div>
            </div>
          </div>
          <div className={styles.lcContainer}>
            <div className={styles.largeCard}>
            <article className={styles.article}>
              <Image src={bnft1}/>
              <h4 className={styles.header}>3 months</h4>
            </article>
              <div className={styles.lcdet}>
              <div className={styles.lcname}>Azuki #9839</div>
              <div className={styles.list2}>
              <div className={styles.listdesc}>
                <p className={styles.lname}>Bought</p>
                <p className={styles.price}>02.82 <FaEthereum color='#FAFAFA' size='15px'/></p>
              </div>
              <div className={styles.listdet}>
                <p className={styles.ltime}>Floor</p>
                <div className={styles.ldetnum}>
                <div className={styles.xp2}>12.74 <FaEthereum color='#FAFAFA' size='15px'/></div>
                <div className={styles.xp}>+21.6%XP</div>
                </div>
              </div>
              </div>
              </div>
            </div>
            <div className={styles.largeCard}>
            <article className={styles.article}>
              <Image src={bnft2}/>
              <h4 className={styles.header}>3 months</h4>
            </article>
              <div className={styles.lcdet}>
              <div className={styles.lcname}>MAYC #9839</div>
              <div className={styles.list2}>
              <div className={styles.listdesc}>
                <p className={styles.lname}>Bought</p>
                <p className={styles.price}>02.82 <FaEthereum color='#FAFAFA' size='15px'/></p>
              </div>
              <div className={styles.listdet}>
                <p className={styles.ltime}>Floor</p>
                <div className={styles.ldetnum}>
                <div className={styles.xp2}>12.74 <FaEthereum color='#FAFAFA' size='15px'/></div>
                <div className={styles.xp}>+21.6%XP</div>
                </div>
              </div>
              </div>
              </div>
            </div>
            <div className={styles.largeCard}>
            <article className={styles.article}>
              <Image src={bnft3}/>
              <h4 className={styles.header}>3 months</h4>
            </article>
              <div className={styles.lcdet}>
              <div className={styles.lcname}>MoonBirds #9839</div>
              <div className={styles.list2}>
              <div className={styles.listdesc}>
                <p className={styles.lname}>Bought</p>
                <p className={styles.price}>02.82 <FaEthereum color='#FAFAFA' size='15px'/></p>
              </div>
              <div className={styles.listdet}>
                <p className={styles.ltime}>Floor</p>
                <div className={styles.ldetnum}>
                <div className={styles.xp2}>12.74 <FaEthereum color='#FAFAFA' size='15px'/></div>
                <div className={styles.xp}>+21.6%XP</div>
                </div>
              </div>
              </div>
              </div>
            </div>
            <div className={styles.largeCard}>
            <article className={styles.article}>
              <Image src={bnft4}/>
              <h4 className={styles.header}>3 months</h4>
            </article>
              <div className={styles.lcdet}>
              <div className={styles.lcname}>Otherdeed #9839</div>
              <div className={styles.list2}>
              <div className={styles.listdesc}>
                <p className={styles.lname}>Bought</p>
                <p className={styles.price}>02.82 <FaEthereum color='#FAFAFA' size='15px'/></p>
              </div>
              <div className={styles.listdet}>
                <p className={styles.ltime}>Floor</p>
                <div className={styles.ldetnum}>
                <div className={styles.xp2}>12.74 <FaEthereum color='#FAFAFA' size='15px'/></div>
                <div className={styles.xp}>+21.6%XP</div>
                </div>
              </div>
              </div>
              </div>
            </div>
            <div className={styles.largeCard}>
            <article className={styles.article}>
              <Image src={bnft5}/>
              <h4 className={styles.header}>3 months</h4>
            </article>
              <div className={styles.lcdet}>
              <div className={styles.lcname}>Cryptoz #9839</div>
              <div className={styles.list2}>
              <div className={styles.listdesc}>
                <p className={styles.lname}>Bought</p>
                <p className={styles.price}>02.82 <FaEthereum color='#FAFAFA' size='15px'/></p>
              </div>
              <div className={styles.listdet}>
                <p className={styles.ltime}>Floor</p>
                <div className={styles.ldetnum}>
                <div className={styles.xp2}>12.74 <FaEthereum color='#FAFAFA' size='15px'/></div>
                <div className={styles.xp}>+21.6%XP</div>
                </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}
