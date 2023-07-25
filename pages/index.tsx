/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { faBars, faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Accordion } from 'components/Accordion'
import Carousel, { CarouselItem } from 'components/Carousel'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import reviews from './../reviwes.json'

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <header className='sticky top-0 bg-white z-10'>
        {/* Top Strip */}
        <div className='h-[25px] bg-theme-main py-2 flex items-center justify-center'>
          <p className='w-fit text-[11px] font-normal text-white'>
            Cash On Delivery + FREE Shipping In India
          </p>
        </div>
        <nav>
          <div className='flex justify-between px-2 items-center mx-auto max-w-1200'>
            {/* Header Logo */}
            <div className='w-40 md:w-[200px]'>
              <Image
                src='/assets/images/lumin-care-logo.png'
                width={160}
                height={59}
                objectFit='contain'
                alt='lumin care logo'
                layout='responsive'
              />
            </div>

            {/* Menu */}
            <ul className='list-none font-bold hidden no-underline -ml-10 md:flex md-plus:-ml-11'>
              <li>
                <a className='py-[15px] px-[30px]' href='#'>
                  Home
                </a>
              </li>
              <li>
                <a className='py-[15px] px-[30px]' href='#'>
                  Best Sellers
                </a>
              </li>
              <li>
                <a className='py-[15px] px-[30px]' href='#'>
                  Questions?
                </a>
              </li>
              <li>
                <a className='py-[15px] px-[30px]' href='#'>
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Header Icons */}
            <div className='flex items-center'>
              {/* Cart */}
              <div className='flex items-start gap relative mr-2'>
                <FontAwesomeIcon icon={faCartShopping} className='w-7 h-6' />
                <span className='font-bold text-base absolute -top-3 -right-2'>0</span>
              </div>
              {/* Bread Menu */}
              <div
                className='w-8 h-9 bg-theme-main flex justify-center items-center ml-1 md:hidden'
                onClick={() => setIsMenuOpen((prev) => !prev)}>
                <FontAwesomeIcon
                  icon={isMenuOpen ? faClose : faBars}
                  className='w-[17.5px] h-[21px] text-white'
                />
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <ul
            className={`list-none font-normal lg:font-medium no-underline text-xl px-6 md:hidden transition-all duration-500 ease-in overflow-hidden ${isMenuOpen ? 'max-h-32' : 'max-h-0'
              }`}>
            <li className='py-1'>
              <a className='text-base font-normal lg:font-medium' href='#order-now'>Order Now</a>
            </li>
            <li className='py-1'>
              <a className='text-base font-normal lg:font-medium' href='#reviews'>Reviews</a>
            </li>
            <li className='py-1'>
              <a className='text-base font-normal lg:font-medium' href='#questions'>Questions?</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='mx-auto max-w-1200' id="order-now">
        {/* Product Showcase Section */}

        <div className="flex flex-col lg:flex-row">
          <div className='w-full lg:w-1/2 relative'>
            <div className="sticky top-20">
              {/* Product Info Mobile */}
              <section className='px-4 my-4 block lg:hidden'>
                <div>
                  {/* Product Title */}
                  <div>
                    <h1 className='text-[21px] font-bold'>Lumin Care™ Fat Melting Miracle</h1>
                  </div>
                  {/* Prodct Review */}
                  <div className='flex items-center mb-1'>
                    <div className='w-[108px] ml-[-10px]'>
                      <Image
                        src='/assets/images/five-stars.webp'
                        width={108}
                        height={32}
                        objectFit='contain'
                        alt='five stars'
                        layout='responsive'
                      />
                    </div>
                    <span className='text-[17px]'>4.8 (2736 Verified Reviews)</span>
                  </div>
                  {/* Price */}
                  <div className='flex text-[19px] gap-[5px] font-bold'>
                    <span className='text-theme-main'>Rs. 899.00</span>
                    <span className='text-gray-400 line-through'>Rs. 1,800.00</span>
                  </div>
                </div>
              </section>

              {/* Carousel */}
              <section className='px-4 my-4'>
                <Carousel>
                  <CarouselItem>
                    <img className='w-full' src="/assets/images/slider1.webp" alt="slider1" />
                  </CarouselItem>
                  <CarouselItem>
                    <img className='w-full' src="/assets/images/slider2.webp" alt="slider2" />
                  </CarouselItem>
                  <CarouselItem>
                    <img className='w-full' src="/assets/images/slider3.webp" alt="slider3" />
                  </CarouselItem>
                  <CarouselItem>
                    <img className='w-full' src="/assets/images/slider4.webp" alt="slider4" />
                  </CarouselItem>
                </Carousel>
              </section>

              {/* Trust Section */}
              <section className='px-4 my-4'>
                <div className='flex justify-between w-full'>
                  <div className='flex items-center justify-center gap-2 w-1/2'>
                    <span className='w-10'>
                      <Image
                        src='/assets/images/TrustIcon_clinically_studied.png'
                        width={30}
                        height={32}
                        objectFit='contain'
                        alt='five stars'
                        layout='responsive'
                      />
                    </span>
                    <span className=''>
                      <p className=''>Clinically Studied</p>
                    </span>
                  </div>
                  <div className='flex items-center justify-center gap-2 w-1/2'>
                    <span className='w-10'>
                      <Image
                        src='/assets/images/TrustIcon_No_SIde_Effect.png'
                        width={30}
                        height={32}
                        objectFit='contain'
                        alt='five stars'
                        layout='responsive'
                      />
                    </span>
                    <span className=''>
                      <p className=''>No Side effects</p>
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className='w-full lg:w-1/2'>
            {/* Product Info Desktop */}
            <section className='px-4 my-4 hidden lg:block'>
              <div>
                {/* Product Title */}
                <div>
                  <h1 className='text-[21px] font-bold'>Lumin Care™ Fat Melting Miracle</h1>
                </div>
                {/* Prodct Review */}
                <div className='flex items-center mb-1'>
                  <div className='w-[108px] ml-[-10px]'>
                    <Image
                      src='/assets/images/five-stars.webp'
                      width={108}
                      height={32}
                      objectFit='contain'
                      alt='five stars'
                      layout='responsive'
                    />
                  </div>
                  <span className='text-[17px]'>4.8 (2736 Verified Reviews)</span>
                </div>
                {/* Price */}
                <div className='flex text-[19px] gap-[5px] font-bold'>
                  <span className='text-theme-main'>Rs. 899.00</span>
                  <span className='text-gray-400 line-through'>Rs. 1,800.00</span>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className='px-4 my-4'>
              <button className='px-3 py-4 bg-theme-main text-white w-full hover:bg-theme-main-dark transition-colors duration-200 ease-in text-base rounded drop-shadow-xl'>
                <div className='flex justify-center items-center gap-2'>
                  <span className='pt-0.5'>
                    <FontAwesomeIcon icon={faCartShopping} className='w-4 h-5' />
                  </span>
                  <span className='text-white font-bold'>Buy with Cash On Delivery</span>
                </div>
              </button>
            </section>

            {/* Product Description */}
            <section className='px-4 my-2'>
              <div className='h-fit px-4 my-2 mx-auto w-[350px]'>
                <Image
                  src='/assets/images/trust-badges-lumincare.webp'
                  width={260}
                  height={44}
                  objectFit='contain'
                  alt='five stars'
                  layout='responsive'
                />
              </div>

              <div className='text-center px-1 mb-2 text-xl'>
                <h3>
                  <strong>
                    <span className='underline'>INSTANTLY</span> BURN BELLY FAT AND ELIMINATE TOXINS
                    THROUGH YOUR BELLY BUTTON
                  </strong>
                </h3>
              </div>
              <div className='mb-4'>
                <img src='/assets/images/positive_effects.webp' alt='five stars' className='mx-auto' />
              </div>
              <div className='text-center mb-4'>
                <p className='text-base leading-normal'>
                  <span>This</span>
                  <strong>&nbsp;all-natural</strong>
                  <span>&nbsp;oil&nbsp;</span>
                  <span>delivers </span>
                  <strong>powerful herbal ingredients</strong>
                  <span>&nbsp;helping you </span>
                  <strong>lose stubborn belly fat</strong>
                  <span>. </span>
                  <strong>Say goodbye </strong>
                  <span>to</span>
                  <strong> excess weight, exercise, and strict diets,&nbsp;</strong>
                  <span>and hello to a</span>
                  <strong> more energized, confident you!</strong>
                </p>
              </div>
              <div className='mb-2'>
                <Image
                  src='/assets/images/slider4.webp'
                  width={480}
                  height={480}
                  objectFit='contain'
                  alt='burn fat'
                  layout='responsive'
                />
              </div>
              <div className='text-center'>
                <h3 className='text-xl underline mb-2'>
                  <strong>Get Instant Results Or Your Money Back Guaranteed</strong>
                </h3>
                <p className='text-base leading-normal'>
                  Drip some drops of&nbsp;<b>Fat Melting Miracle</b>&nbsp;on your belly button and let
                  it absorb to&nbsp;<strong>achieve visible slimming effect</strong>. The ultra-fast fat
                  burning formula is specially designed to&nbsp;<strong>eliminate stubborn fat.</strong>
                </p>
              </div>
              <div className='mb-1'>
                <Image
                  src='/assets/images/slider3.webp'
                  width={480}
                  height={480}
                  objectFit='contain'
                  alt='Amazing Results!'
                  layout='responsive'
                />
              </div>
              <div className='text-center mb-4'>
                <h3 className='text-xl mb-3'>
                  <strong>BURN FAT WITHOUT STRICT DIETS OR EXERCISE</strong>
                </h3>
                <p className='text-base leading-normal'>
                  <strong>Eat anything you want</strong>, including your favorite dishes, and your
                  favorite fast food meals. The burner&nbsp;oil will help you lose stubborn fat, while
                  you can live your best life <strong>(NO EXERCISE OR DIET NEEDED)</strong>.
                </p>
              </div>
              <div className='text-center mb-4'>
                <h3 className='text-xl mb-3'>
                  <strong>EFFECTIVE & NO SIDE EFFECTS:</strong>
                </h3>
                <p className='text-base leading-normal mb-2'>
                  Relieves gassiness and bloating. You can lose weight, slim down, and increase your
                  energy levels for a better and healthy life.
                </p>
                <h3 className='text-xl mb-3'>
                  <strong>LOSE WEIGHT NATURALLY:</strong>
                </h3>
                <p className='text-base leading-normal mb-2'>
                  Boosts metabolism levels and increases blood circulation to strengthen the immune
                  system.
                </p>
                <h3 className='text-xl mb-3'>
                  <strong>100% SAFE FOR ALL SKIN TYPES:</strong>
                </h3>
                <p className='text-base leading-normal mb-2'>
                  Botanically-based, hypo-allergenic, non-toxic, and 100% safe for everyday use.
                </p>
              </div>
              <div className='mb-4'>
                <Image
                  src='/assets/images/slider2.webp'
                  width={480}
                  height={480}
                  objectFit='contain'
                  alt='Amazing Results!'
                  layout='responsive'
                />
              </div>
              <div className='text-center'>
                <h3 className='text-xl mb-3'>
                  <strong>How to use:</strong>
                </h3>
                <p className='text-base leading-normal mb-2'>
                  Clean your belly button carefully and apply the product <br />
                  You may apply the oil&nbsp;on various areas,&nbsp;but applying the oil&nbsp;directly
                  over the navel will improve&nbsp;results.&nbsp; <br />
                  Results appear after&nbsp;<strong data-mce-fragment='1'>the first use</strong>
                </p>
              </div>
              <div className='text-center'>
                <h3 className='text-xl mb-1'>
                  <strong>One BOX Includes:</strong>
                </h3>
                <p className='text-xl leading-normal mb-2'>Lumin Care™ Fat Melting Miracle</p>
              </div>
              <div className='mb-6'>
                <img
                  src='/assets/images/money_back_guarantee.webp'
                  alt='Money Back Guarantee!'
                  className='mx-auto'
                />
              </div>
              <div className='mb-4 text-center'>
                <h2 className='text-md mb-3 font-bold'>
                  <strong>Your Order will Arrive in Our Branded Box!</strong>
                </h2>
                <p className='text-xl leading-normal mb-2'>
                  Your package will arrive in our branded box and&nbsp;is easy to spot. It ensures that
                  your order arrives safely and securely
                </p>
              </div>
              <img
                src='/assets/images/slider1.webp'
                alt='DeliveryBox'
                className='rounded-lg mx-auto'
              />
            </section>
          </div>
        </div>

        {/* Reviews Carousel */}

        <section className='p-4 my-4 bg-theme-main-light'>
          <Carousel itemsToShow={3}>
            {reviews.map((review: Record<string, string>, index) => {
              return (
                <CarouselItem key={index}>
                  <div className='flex flex-col items-center gap-6'>
                    <div className="">
                      <img className="mx-auto rounded-lg" src={review.img} />
                    </div>
                    <div className="">
                      <p className="whitespace-pre-wrap text-center text-base font-normal">
                        {review.review}
                      </p>
                    </div>
                    <div className="">
                      <div className="flex items-center gap-4">
                        <img src={review.user_img} className='w-[60px] h-[60px] rounded-full' />
                        <h3 className="font-bold text-sm">
                          {review.review_by}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </Carousel>
        </section>

        {/* FAQ */}
        <section id="questions" className='px-4 my-4'>
          {/* Product Title */}
          <div className='px-4 my-14'>
            <h1 className='text-[23px] font-bold text-center'>Frequently Asked Questions</h1>
          </div>
          <div className='rounded-lg'>
            <Accordion>
              <Accordion.Header>Does the Fat Melting Miracle really work?</Accordion.Header>
              <Accordion.Body>
                Absolutely! This revolutionary oil has been <strong>scientifically proven</strong>{' '}
                to instantly get rid of even the most stubborn fat. You'll be amazed at the
                transformative results it delivers!
              </Accordion.Body>
            </Accordion>
            <Accordion>
              <Accordion.Header>How long does it take to see noticeable results?</Accordion.Header>
              <Accordion.Body>
                With the Fat Melting Miracle, you'll experience visible results in no time!{' '}
                <strong>In as little as 1 use, you'll witness a dramatic reduction in fat</strong>,
                allowing you to achieve your dream body faster than you ever thought possible.
              </Accordion.Body>
            </Accordion>
            <Accordion>
              <Accordion.Header>
                Is this product safe to use and are there any side effects?
              </Accordion.Header>
              <Accordion.Body>
                The Fat Melting Miracle has been meticulously formulated with your well-being in
                mind.{' '}
                <strong>
                  It is free from any harmful ingredients or chemicals that could cause side effects
                </strong>
                . Our product has undergone rigorous testing and meets the highest quality
                standards.
              </Accordion.Body>
            </Accordion>
            <Accordion>
              <Accordion.Header>Can this product be used by both men and women?</Accordion.Header>
              <Accordion.Body>
                Yes, the Fat Melting Miracle is suitable for both men and women who are looking to
                effectively reduce stubborn fat. It is a versatile solution that can cater to the
                needs and goals of individuals of all genders.
              </Accordion.Body>
            </Accordion>

            <Accordion>
              <Accordion.Header>Is it suitable for all body types?</Accordion.Header>
              <Accordion.Body>
                Yes, the Fat Melting Miracle is suitable for all body types. Regardless of your body
                shape or size, this powerful formula works synergistically to melt away fat and
                reveal a more toned and sculpted physique.
              </Accordion.Body>
            </Accordion>

            <Accordion>
              <Accordion.Header>Are the results permanent?</Accordion.Header>
              <Accordion.Body>
                Absolutely! The Fat Melting Miracle works by targeting and eliminating fat cells.
                Once these fat cells are melted away, they are gone for good. You can confidently
                enjoy your transformed body without worrying about the fat returning.
              </Accordion.Body>
            </Accordion>

            <Accordion>
              <Accordion.Header>Can this product be used on specific areas?</Accordion.Header>
              <Accordion.Body>
                Yes! The Fat Melting Miracle is designed to target those troublesome areas where fat
                tends to accumulate, such as the abdomen, thighs, hips, and arms. You can use it on
                specific areas to sculpt and contour your body to perfection.
              </Accordion.Body>
            </Accordion>
          </div>
        </section>

      </main>
    </div>
  )
}
export default Home
